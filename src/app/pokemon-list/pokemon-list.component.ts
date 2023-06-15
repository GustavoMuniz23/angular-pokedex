import { Component } from '@angular/core';
import { Pokemon } from '../../_model/Pokemon';
import { Type } from '../../_model/Type';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  public constructor(public pokemonService: PokemonService){}

}