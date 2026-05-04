import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
    
        <a routerLink="/profile"> Ver Perfil</a>
    </section>
  `,
  imports: [RouterLink],
})
export class HomePage {}