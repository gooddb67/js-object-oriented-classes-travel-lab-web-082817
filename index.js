class Driver{
    constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

      yearsExperienceFromBeginningOf(endYear){
      let startYear = this.startDate.getFullYear()
      return (endYear - startYear) -1
    }

}

class Route{
    constructor(beginningLocation, endingLocation){
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
    }

    blocksTravelled(){
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
      let startingBlock = this.beginningLocation.vertical;
      let destinationBlock = this.endingLocation.vertical;
      let startingAve = this.beginningLocation.horizontal;
      let destinationAve = this.endingLocation.horizontal;
      let blockDiff =  destinationBlock - startingBlock;
      let aveDiff = eastWest.indexOf(destinationAve) - eastWest.indexOf(startingAve);

      return blockDiff + aveDiff;
    }

    estimatedTime(peak){

      if (peak){
        return this.blocksTravelled() / 2
      }else{
        return this.blocksTravelled()/3
      }
    }


}
