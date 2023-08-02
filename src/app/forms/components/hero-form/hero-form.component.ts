import { Component, inject } from '@angular/core';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
    hero = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet');
    powers = ['Really Smart', 'Super Flexible',"Super Hot", "Weather Changer"];
    router = inject(Router);

    nuovoEroe() {
      this.hero = new Hero(42, '', '', '');
    }

    onSubmit(){
      console.log('submit ok  ');
      console.log(this.hero);
      this.router.navigate(['/products'])
    }
}
