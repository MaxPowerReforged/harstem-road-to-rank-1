export function lateralPageTransition(to, from) {
  if (!from) {
    return "slide-left";
  }
  console.log("to", to.name, to.meta.depth);
  console.log("from", from.name, from.meta.depth);
  return +to.meta.depth > +from.meta.depth ? "slide-right" : "slide-left";
}
