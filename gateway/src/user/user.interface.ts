export interface HeroesService {
    findOne(data: { id: number }): Promise<any>;
}
export interface HeroById {
    id:number;
}
export interface Hero {
    id:number;
    name:string;
    
}