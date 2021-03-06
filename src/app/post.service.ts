import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  getPosts() {
    return this.posts;
  }


}
