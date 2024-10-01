import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsArticlesComponent, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reecocefeAPP';
  searchQuery: string = '';

  onSearchChange(query: string) {
    this.searchQuery = query;
  }
  
}
