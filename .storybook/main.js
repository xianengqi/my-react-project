module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        typescriptOptions: {
          reactDocgen: 'react-docgen-typescript',
          reactDocgenTypescriptOptions: {
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            }
          }
        }
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    // '@storybook/addon-info'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            // propFilter: (prop) => {
            //   if (prop.parent) {
            //     return !prop.parent.fileName.includes('node_modules')
            //   }
            //   return true            
            // }
          }
        },
        
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
