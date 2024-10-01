import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']  // Correct the key from 'styleUrl' to 'styleUrls'
})
export class NewsArticlesComponent implements OnChanges {
 
  
  @Input() searchQuery: string ='';
  selectedTab: string = 'All';
  showMore: boolean = false;
 

   // Sample data for articles
   articles = [
    {
      title: '5+ Feng Shui Owls Ideas & Benefits',
      date: 'Aug 04, 2024',
      imageUrl: 'assets/fengshui-owl.jpg'
    },
    {
      title: '15+ Feng Shui Gifts for New Home',
      date: 'Aug 03, 2024',
      imageUrl: 'assets/fengshui-gifts.jpg'
    },
    {
      title: 'How to Improve Your Home with Feng Shui',
      date: 'Aug 02, 2024',
      imageUrl: 'assets/fengshui-home.jpg'
    }
    // Add more articles as needed
  ];

  filteredArticles = [...this.articles];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.filterArticles();
    }
  }

  selectTab(tabName: string) {
    this.selectedTab = tabName;
    this.filterArticles();
  }

  showMoreLinks() {
    this.showMore = !this.showMore;
  }
  filterArticles() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(query)
      );
    } else {
      this.filteredArticles = [...this.articles];
    }
  }
}
