export interface CourseListItem {
    id: number;
    name: string;
    description: string;
    isTopRated: Boolean;
    date: Date;
    authors: [
        {
            id: number,
            firstName: string,
            lastName: string
        }
    ]
    length: number;
    
    
}
