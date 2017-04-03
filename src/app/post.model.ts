export class Post {
  vote: number = 0;

  constructor(public title: string, public content: string, public date: number, public category: string, public id: number) {}
}
