nfl.use('nfl-news-articletools', function (Y) {
	
	//console.log("article tools", Y.NFL.News);

	/* setup news cards event listeners*/
	try {
		var YNFLNews    = Y.NFL.News,
			authorCard  = new YNFLNews.AuthorCard(),
			emailCard   = new YNFLNews.EmailCard(),
			emailBtn = Y.one("#article-hdr-tools-email a");
		if(emailBtn){
			emailBtn.on("click", function (event) {
				event.halt();
				emailCard.toggle();
			});
		}
		if (Y.one('#rr-news-team')) {
			new YNFLNews.RelatedLinkTrack({
				node: "#rr-news-team",
				type: 'team'
			});
		}
		new YNFLNews.RelatedLinkTrack({
			node: "#rr-news-latest",
			type: 'latest'
		});
	}
	catch (e) { console.error(e); }
	
});
