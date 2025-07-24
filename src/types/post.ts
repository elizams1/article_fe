export interface Post{
  id : number;
  title: string;
  content: string;
  category:string;
  status: string;
  created_date: string|Date;
  updated_date: string|Date;
}