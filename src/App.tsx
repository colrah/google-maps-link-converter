import React, { useState } from 'react';
import { Copy, MapPin, ArrowRight, Check, AlertCircle, ExternalLink, RotateCcw } from 'lucide-react';

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const extractCidFromUrl = (url: string): string | null => {
    try {
      // Look for the hex CID pattern in the URL - it's after the colon in the place ID
      const cidMatch = url.match(/!1s0x[a-fA-F0-9]+:0x([a-fA-F0-9]+)/);
      if (cidMatch && cidMatch[1]) {
        // Convert hex to decimal - need to handle large numbers properly
        const hexValue = cidMatch[1];
        // Use BigInt for large hex numbers to avoid precision issues
        const decimalValue = BigInt('0x' + hexValue);
        return decimalValue.toString();
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  const convertUrl = () => {
    setError('');
    setOutputUrl('');
    
    if (!inputUrl.trim()) {
      setError('Please enter a Google Maps URL');
      return;
    }

    if (!inputUrl.includes('google.com/maps')) {
      setError('Please enter a valid Google Maps URL');
      return;
    }

    const cid = extractCidFromUrl(inputUrl);
    if (!cid) {
      setError('Could not extract CID from the URL. Make sure it\'s a valid Google Maps place URL.');
      return;
    }

    const shortUrl = `https://maps.google.com/?cid=${cid}`;
    setOutputUrl(shortUrl);
  };

  const copyToClipboard = async () => {
    if (!outputUrl) return;
    
    try {
      await navigator.clipboard.writeText(outputUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  const clearAll = () => {
    setInputUrl('');
    setOutputUrl('');
    setError('');
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Google Maps Link Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform long, complex Google Maps URLs into clean, shareable links. 
            Perfect for sharing locations without the clutter.
          </p>
        </div>

        {/* Main Converter */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Input Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Long Google Maps URL
              </label>
              <div className="relative">
                <textarea
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Paste your long Google Maps URL here..."
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none min-h-[120px] text-sm"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={convertUrl}
                disabled={!inputUrl.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Convert URL
                <ArrowRight className="w-5 h-5" />
              </button>
              
              {(inputUrl || outputUrl || error) && (
                <button
                  onClick={clearAll}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="w-5 h-5" />
                  Clear
                </button>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Output Section */}
            {outputUrl && (
              <div className="animate-fadeIn">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Converted Short URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={outputUrl}
                    readOnly
                    className="w-full p-4 border-2 border-green-200 bg-green-50 rounded-lg text-sm font-mono pr-24"
                  />
                  <div className="absolute right-2 top-2 flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => openUrl(outputUrl)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {copied && (
                  <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Copied to clipboard!
                  </p>
                )}
              </div>
            )}
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Paste URL</h3>
                <p className="text-gray-600 text-sm">
                  Copy and paste your long Google Maps URL from the browser
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Extract CID</h3>
                <p className="text-gray-600 text-sm">
                  Our tool extracts the unique Content ID from the complex URL
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Clean Link</h3>
                <p className="text-gray-600 text-sm">
                  Get a short, clean URL that's easy to share and remember
                </p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Example:</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Long URL:</p>
                <p className="text-xs font-mono bg-white p-2 rounded border break-all">
                  https://www.google.com/maps/place/A+New+Leaf+Norfolk/@52.6434402,1.3488311,17z/data=!3m1!4b1!4m6!3m5!1s0x47d9e301afa19001:0x8e6273dccb2b7b1c...
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Short URL:</p>
                <p className="text-xs font-mono bg-white p-2 rounded border">
                  https://maps.google.com/?cid=10259890293242034972
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;