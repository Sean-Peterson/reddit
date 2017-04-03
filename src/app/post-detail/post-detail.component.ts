import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
    this.posts = this.postService.getPosts();
    this.getPostDetail();
  }

  posts: Post[];
  postDetail: Post;
  postId: number = null;

  getPostDetail() {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === this.postId){
        this.postDetail = this.posts[i];
      }
    }
  }

}
