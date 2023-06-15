import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from '../../_model/Pokemon'


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input('pokemon')
  public pokemon!: Pokemon;

  public getPokemonNumber = getPokemonNumber;
  
  public getPokemonImage = getPokemonImage;
}
