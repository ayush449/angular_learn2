import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any = [];
  currentPage = 1;
  postsPerPage = 10;
  totalPosts = 0;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res: any) => {
      this.posts = res;
      this.totalPosts = this.posts.length;
    });
  }

  onPageChange(event: any) {
    this.currentPage = event;
  }
}
