import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });

  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request
  }

}
