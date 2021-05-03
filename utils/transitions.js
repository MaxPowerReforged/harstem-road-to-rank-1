export function lateralPageTransition(to, from) {
  if (!from) {
    return "slide-left";
  }
  console.log("to", to.name, to.query.id);
  console.log("from", from.name, from.query.id);
  return +to.query.id > +from.query.id ? "slide-right" : "slide-left";
}
