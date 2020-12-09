import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  value: string;
}

const CodeBlock: React.FC<Props> = ({ value }) => {
  return (
    <SyntaxHighlighter language="tsx" style={dracula} showLineNumbers>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
