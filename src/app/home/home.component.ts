import { AfterViewInit, Injector, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public _renderer:any;

  constructor(injector: Injector) {  
    this._renderer = injector.get(Renderer2);
    } 
  title = "Trang chủ - Bất động sản";
  ngOnInit(): void {
  }
  public loadScripts() {
    this.renderExternalScript('../../assets/js/index.bundle.js').onload = () => {
    }
  }
public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this._renderer.appendChild(document.body, script);
    return script;
  }
  ngAfterViewInit() { 
    this.loadScripts();
  }

}
