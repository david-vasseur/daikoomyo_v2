function dateEnd(value: number, service: string): number | null {
  switch (service) {
    case "soin-energetique":
      switch (value) {
        case 1:
        case 2:
          return 60;
        case 3:
          return 90;
        default:
          return null;
      }

    case "eft":
      switch (value) {
        case 1:
        case 2:
          return 75;
        case 3:
          return 45;
        default:
          return null;
      }

    case "fleurs-de-bach":
      switch (value) {
        case 1:
        case 2:
          return 60;
        case 3:
          return 15;
        default:
          return null;
      }

    default:
      return null;
  }
}

export default dateEnd;
