export class Survey {
  constructor(
      public id?: number,
      public owner?: string,
      public title?: string,
      public type?: string,
      public startdate?: string,
      public enddate?: string,
      public q1?: string,
      public q2?: string,
      public q3?: string,
      public q4?: string,
      public q5?: string) { }
}
