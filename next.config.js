/**
 * @type @return {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = (_phase, _config) => {
  return {
    webpack: (webpackConfig, _rest) => {
      return webpackConfig;
    },
    // experimental: {
    //   reactRoot: true,
    // },
  };
};
