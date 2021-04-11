import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories,
        error => alert('Erro ao buscar dados')
    })
  }

  deleteCategory(id: number) {
    const mustDelete = confirm('Deseja deletar o item?')

    if (mustDelete)
      this.categoryService.delete(id).subscribe(
        () => this.categories = this.categories.filter(element => element.id != id),
        () => alert('Erro ao tentar excluir')
      )
  }

}
