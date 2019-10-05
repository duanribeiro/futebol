import React from "react";
import { Pre, LineNo } from "./codelooker.style";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
// import theme from 'prism-react-renderer/themes/vsDark'
// import theme from 'prism-react-renderer/themes/nightOwl'
// import theme from 'prism-react-renderer/themes/duotoneDark'
// import theme from 'prism-react-renderer/themes/oceanicNext'
// import theme from 'prism-react-renderer/themes/shadesOfPurple'
// import theme from 'prism-react-renderer/themes/vsDarkPlus'

const CodeLooker = ({ Code }) => {
    return (
        <div>
            <Highlight
                {...defaultProps}
                theme={theme}
                code={Code}
                language="jsx"
                className="code-looker-class"
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps
                }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </Pre>
                )}
            </Highlight>
        </div>
    );
};

export default CodeLooker;
