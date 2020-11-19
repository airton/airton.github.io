export default function () {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-54828957-1">
      </script>
      <script dangerouslySetInnerHTML={
        { __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag("js", new Date());
          gtag("config", "UA-54828957-1");
        `}
      }>
      </script>

      <script data-ad-client="ca-pub-3553535106347103" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </>
  )
}
