export class InMemoryDataService {
    createDb() {
        let projects = [{
                id: 1,
                name: 'test project',
                description: 'lorem upsum yat karsom',
                language: 'ar-sa',
                color: 'ABE5DA',
                start: '08-15-2016',
                end: '08-17-2016',
                cost: '30000 SAR'
                location: 'Jeddah',
                status: 'complete',
                coordinates: {
                    latitude: 40.12345,
                    longitude: 40.12345
                },
                {
                    id: 2,
                    name: 'test project 2',
                    description: 'lorem upsum yat karsom',
                    language: 'ar-sa',
                    color: 'ABE5DA',
                    start: '08-10-2016',
                    end: '09-20-2016',
                    cost: '450000 SAR'
                    location: 'Jeddah',
                    status: 'in progress',
                    coordinates: {
                        latitude: 40.12345,
                        longitude: 40.12345
                    }
                },
                {
                    id: 3,
                    name: 'test project 3',
                    description: 'lorem upsum yat karsom',
                    language: 'ar-sa',
                    color: 'ABE5DA',
                    start: '08-10-2016',
                    end: '10-20-2016',
                    cost: '400 SAR'
                    location: 'Jeddah',
                    status: 'initiated',
                    coordinates: {
                        latitude: 40.12345,
                        longitude: 40.12345
                    }
                }
            ];
            return {
                projects
            };
        }
    }
