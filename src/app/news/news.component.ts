import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [PostService]
})
export class NewsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.getNewsPosts();
  }

  posts: Post[];
  newsPosts: Post[] = [];

  getNewsPosts() {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].category === 'news') {
        this.newsPosts.push(this.posts[i]);
      }
    }
    return this.newsPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
