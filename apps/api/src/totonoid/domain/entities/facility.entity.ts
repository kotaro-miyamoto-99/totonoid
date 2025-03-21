export class Facility {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly location: string,
    private readonly description: string,
    private readonly temperature: number,
    private readonly waterTemp: number,
    private readonly rating: number,
    private readonly tags: string[],
    private readonly createdAt: string,
    private readonly updatedAt: string,
  ) {}

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      description: this.description,
      temperature: this.temperature,
      waterTemp: this.waterTemp,
      rating: this.rating,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
