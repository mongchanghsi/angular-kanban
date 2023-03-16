import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardItemGroupComponent } from './board-item-group.component';

describe('BoardItemGroupComponent', () => {
  let component: BoardItemGroupComponent;
  let fixture: ComponentFixture<BoardItemGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardItemGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
