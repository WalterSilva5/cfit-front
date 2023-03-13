const convertLinkToRouter = (linksList: any, history: any) => {
  linksList
    .forEach(e => {
      const href = e.href;
      // eslint-disable-next-line no-script-url
      e.href = 'javascript:void(0);';
      e.onclick = () => {
        const url = href.replace(window.location.origin, '');
        history.push(url);
      }
    });
}

export default convertLinkToRouter;
