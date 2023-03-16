import { Component } from '@angular/core';
import { Board } from 'src/app/interfaces/board';
import { BOARD_TYPE } from 'src/app/utils/boards';

@Component({
  selector: 'app-board-group',
  templateUrl: './board-group.component.html',
  styleUrls: ['./board-group.component.scss']
})
export class BoardGroupComponent {
  boardTypes: Board[] = BOARD_TYPE;

  
}
