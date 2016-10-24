/* all the functions used to modify or update the general store of the application */

// function fired onWindowResize
export const updateWindowSize = (height, width) => {
  return {
    type: 'WINDOW_RESIZE',
    data: {
      height: height,
      width: width
    }
  }
}
