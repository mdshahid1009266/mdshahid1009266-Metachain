import React, { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    size: "",
    customSize: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Submit Your Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Number */}
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
              placeholder="Enter your address"
              rows={3}
              required
            />
          </div>

          {/* Product Size */}
          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Product Size
            </label>
            <select
              name="size"
              id="size"
              value={formData.size}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
            >
              <option value="" disabled>
                Select a size
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          {/* Custom Size */}
          {formData.size === "Custom" && (
            <div>
              <label
                htmlFor="customSize"
                className="block text-sm font-medium text-gray-700"
              >
                Custom Size
              </label>
              <input
                type="text"
                name="customSize"
                id="customSize"
                value={formData.customSize}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                placeholder="Enter custom size details"
              />
            </div>
          )}

          {/* Product Images */}
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Product Images
            </label>
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              accept="image/*"
            />
            {formData.images.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {formData.images.length} file(s) selected.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 text-sm font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
