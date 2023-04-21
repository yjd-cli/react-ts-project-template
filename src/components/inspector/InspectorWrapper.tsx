import React, { useCallback } from 'react';
import { Inspector } from 'react-dev-inspector';

export const InspectorWrapper = ({ children }) => {
  // console.log('import.meta.env: ', import.meta.env);
  if (!import.meta.env.DEV) {
    return <>{children}</>;
  }

  // 打开编辑器
  const launchEditor = useCallback(({ filePath, lineNumber, columnNumber }) => {
    if (!filePath) {
      return;
    }

    let urlScheme = '';
    // 默认使用 vscode
    // PUBLIC_REACT_DEV_INSPECTOR_LAUNCH_EDITOR 建议放到 .env.development.local 文件中维护
    const REACT_DEV_INSPECTOR_LAUNCH_EDITOR =
      import.meta.env.PUBLIC_REACT_DEV_INSPECTOR_LAUNCH_EDITOR || 'vscode';

    if (REACT_DEV_INSPECTOR_LAUNCH_EDITOR === 'webstorm') {
      urlScheme = `webstorm://open?file=${filePath}&line=${lineNumber}&column=${columnNumber}`;
    } else if (REACT_DEV_INSPECTOR_LAUNCH_EDITOR === 'vscode') {
      urlScheme = `vscode://file/${filePath}:${lineNumber}:${columnNumber}`;
    }

    if (urlScheme) {
      window.open(urlScheme, '_self');
    }
  }, []);

  const handleElementClick = useCallback(({ codeInfo }) => {
    // console.log('codeInfo: ', codeInfo);

    if (!codeInfo) return;

    try {
      const { absolutePath, lineNumber, columnNumber } = codeInfo;

      if (!absolutePath) {
        return;
      }
      launchEditor({ filePath: absolutePath, lineNumber, columnNumber });
    } catch (e) {
      console.log('Inspector Error =>', e);
    }
  }, []);

  return (
    <Inspector
      // 快捷键配置
      keys={['option', 'c']}
      // true: 禁止启动编辑器打开文件（使用场景：只是查看元素的位置信息，不进行跳转 | 想要自定义编辑器跳转行为）
      disableLaunchEditor
      onClickElement={handleElementClick}
    >
      {children}
    </Inspector>
  );
};
