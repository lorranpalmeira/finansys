import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Entry } from '../entry.model';

import { EntryService, } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = []

  constructor(private entryService: EntryService) { }

  ngOnInit() {

    this.entryService.getAll().subscribe((entries) => {
      this.entries = entries,
        error => alert('Erro ao buscar dados')
    })
  }

  deleteentry(id: number) {
    const mustDelete = confirm('Deseja deletar o item?')

    if (mustDelete)
      this.entryService.delete(id).subscribe(
        () => this.entries = this.entries.filter(element => element.id != id),
        () => alert('Erro ao tentar excluir')
      )
  }

}
