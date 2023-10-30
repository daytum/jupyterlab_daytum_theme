import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_daytum_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_daytum_theme:plugin',
  description: 'A JupyterLab extension that implements the Daytum LMS theme.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_daytum_theme is activated!');
    const style = 'jupyterlab_daytum_theme/index.css';

    manager.register({
      name: 'Daytum Theme Light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
