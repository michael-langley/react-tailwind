import { configure } from '@storybook/react';
import '../src/styles/styles.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.(mdx|[tj]sx?)$/), module)