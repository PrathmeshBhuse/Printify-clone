import React from 'react';

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-800">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 text-black">
              Integrations
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Discover
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Start Selling
            </th>
            <th scope="col" className="px-6 py-3 text-black">
              Printify
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Shopify", "Blog", "Custom T-shirts", "Print on Demand"],
            ["Etsy", "Guides", "Custom Hoodies", "Print Providers"],
            ["eBay", "Etsy print-on-demand", "Custom Mugs", "Experts Program"],
            ["Amazon", "Shopify print-on-demand", "Custom Socks", "Printify Express Delivery"],
            ["TikTok Shop", "Woocommerce print-on-demand", "Custom Backpacks", "Become a Partner"],
            ["PrestaShop", "Wix print-on-demand", "Custom Branding", "About"],
            ["BigCommerce", "Squarespace print-on-demand", "Sell on Etsy", "Printify Quality Promise"],
            ["Wix", "Make Your Own Shirt", "Sell on Social Media", "Jobs"],
            ["WooCommerce", "Free T-shirt Designs", "Custom Products", "Webinars"],
            ["Squarespace", "Custom All-Over-Print Hoodies", "Start a Clothing Line", "Printing Profits Podcast"],
            ["Printify API", "Start POD Business", "Bulk Orders", "Contact Us"],
            ["Printify Pop-Up Store", "Transfering To Printify", "Merchant Protection", "Affiliate"],
            ["Shutterstock", "POD Glossary", "Security", "Sitemap"]
          ].map((row, index) => (
            <tr key={index} className="bg-white hover:text-[#39b75d] transition-colors duration-300">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
