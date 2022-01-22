module.exports = {
  stories: [
    '**.*',
    '**.*.mdx',
    '**.*stor(y|ies).mdx',
    '**.*stor(y|ies).mdx',
    '../src/**/*stor(y|ies).@(js|mdx)',
    '../src/**/*.stories.@(js|mdx)',
    '../src/**/*.page.@(js|mdx)',
    '../**/*stor(y|ies).@(js|mdx)',
    '../**/*.stories.@(js|mdx)',
    '../**/*.page.@(js|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
