import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart
  } from '@microsoft/sp-webpart-base';

// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import PraxeumSiteComponent from './components/PraxeumSite.vue';

export interface IPraxeumSiteWebPartProps {
  description: string;
}

export default class PraxeumSiteWebPart extends BaseClientSideWebPart<IPraxeumSiteWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      render: h => h(PraxeumSiteComponent, {
        props: {
          description: this.properties.description
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
