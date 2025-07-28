export default interface IComment {
  id: string; 
  name: string; 
  email: string | null;
  message: string; 
  rate: number; 
  date: Date; 
}
