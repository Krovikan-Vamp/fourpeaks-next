// write a function to sleep for a number of seconds
function sleep(seconds: number): Promise<void> {
    /**
     * Sleep for a number of seconds
     * @param seconds: number of seconds to sleep
     * 
     */
      return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export {sleep}