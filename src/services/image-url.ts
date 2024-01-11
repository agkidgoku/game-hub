const getCroppedImage = (url: string) => {
  const target = "media/";

  // Finding the index of the first occurrence of 'target' in the 'url' string
  const index = url.indexOf(target) + target.length;

  // Extract the substring from the beginning of 'url' to the position after 'target'
  // Concatenate "crop/600/400/" and the remaining part of the original 'url'
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;

// The result of indexOf is the starting position of the substring within the string,
// (or -1 if the substring is not found.)
// In this case, target.length is added to the result of indexOf.
// This is done to get the position just after the end of the "media/" substring.
// The target.length represents the length of the "media/" substring.
// By adding this length to the index, we get the position immediately after the
// "media/" substring.
