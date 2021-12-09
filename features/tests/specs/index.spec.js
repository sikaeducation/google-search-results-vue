const { visit, get, wrap, viewport } = cy;

describe("google.com", () => {
  beforeEach(() => {
    viewport(1400, 1200)
    visit("/")
  })
  describe("Header", () => {
    describe("Primary navigation", () => {
      it("shows the Google logo", () => {
        get("#logo > a > img")
      })
      it("shows the search input box", () => {
        get(".search-input > input")
        get(".search-input > svg")
      })
      it("shows the app switcher", () => {
        get(".user-navigation > ul > .apps > a")
      })
      it("shows the user controls", () => {
        get(".user-navigation > ul > .profile > a > img")
      })
    })
    describe("Secondary navigation", () => {
      it("shows all search types", () => {
        get(".secondary-navigation > .search-types > li > .search-type").as("search-types").should("have.length", 6)
        get("@search-types").each(searchType => {
          wrap(searchType).find("svg")
          wrap(searchType).find("span")
        })
        get(".search-type").contains("All")
        get(".search-type").contains("News")
        get(".search-type").contains("Maps")
        get(".search-type").contains("Videos")
        get(".search-type").contains("Images")
        get(".search-type").contains("More")
      })
      it("should show the 'all' search type as active", () => {
        get(".search-type").eq(0).should("have.class", "active")
      })
      it("should not show other search types as active", () => {
        get(".search-type").eq(1).should("not.have.class", "active")
        get(".search-type").eq(2).should("not.have.class", "active")
        get(".search-type").eq(3).should("not.have.class", "active")
        get(".search-type").eq(4).should("not.have.class", "active")
        get(".search-type").eq(5).should("not.have.class", "active")
      })
      it("shows configuration options", () => {
        get(".configuration li").should("have.length", 2)
        get(".configuration").contains("Settings")
        get(".configuration").contains("Tools")
      })
    })
  })
  describe("Search results", () => {
    describe("Totals", () => {
      it("displays an accurate count of search results", () => {
        get(".search-result-totals").contains("15,500,000")
        get(".search-result-totals").contains("0.76 seconds")
      })
    })
    describe("Sites", () => {
      it("has the correct number of search results", () => {
        get(".search-result").should("have.length", 2)
      })
      describe("Ranchr result", () => {
        beforeEach(() => {
          get(".search-result").eq(0).as("ranchr-result")
        })
        it("shows a linked heading", () => {
          get("@ranchr-result").find("h3 > a")
        })
        it("shows a url", () => {
          get("@ranchr-result").find(".url").contains("https://ranchrschool.com")
        })
        it("shows description", () => {
          get("@ranchr-result").find(".description").contains("The school of the future where students don't pay until they're earning income.")
        })
        it("shows the last visit", () => {
          get("@ranchr-result").find(".last-visit").contains("You've visited this page many times. Last visit: 12/16/19")
        })
        it("shows the correct number of deep links", () => {
          get("@ranchr-result").find(".deep-link").as("deep-links").should("have.length", 2)
          get("@deep-links").eq(0).find("h3 > a").contains("Ranchr School online")
          get("@deep-links").eq(1).find("h3 > a").contains("JavaScript")
          get("@deep-links").each(deepLink => {
            wrap(deepLink).find("p").invoke("text").should("have.length.lt", 100)
          })
        })
        it("shows more links", () => {
          get("@ranchr-result").find(".more-links").contains("More results from https://ranchrschool.com »")
        })
      })
      describe("Question/Answers", () => {
        it("lists three questions", () => {
          get(".question-answer").as("question-answers").should("have.length", 3)
          get("@question-answers").each(questionAnswer => {
            wrap(questionAnswer).as("question-answer").find("h3")
            get("@question-answer").find("svg")
          })
        })
      })
      describe("Twitter result", () => {
        beforeEach(() => {
          get(".search-result").eq(1).as("twitter-result")
        })
        it("shows a linked heading", () => {
          get("@twitter-result").find("h3 > a")
        })
        it("shows a description", () => {
          get("@twitter-result").find(".description").contains("The school of the future where students don't pay until they're earning income.")
        })
        it("shows the correct number of app cards", () => {
          get("@twitter-result").find(".app-card").as("app-cards").should("have.length", 4)
          get("@app-cards").each(appCard => {
            wrap(appCard).find("a > p + p")
          })
        })
      })
    })
  })
  describe("Search highlights", () => {
    beforeEach(() => {
      get(".search-highlights").as("search-highlights")
    })
    describe("Image bar", () => {
      it("has a lead image", () => {
        get("@search-highlights").find(".image-bar > img")
      })
      it("has the correct number of supporting images", () => {
        get("@search-highlights").find(".image-bar > .supporting-images li").should("have.length", 8)
      })
    })
    describe("Overview", () => {
      it("shows a title", () => {
        get("@search-highlights").find(".overview").contains("Ranchr")
      })
      it("shows a description", () => {
        get("@search-highlights").find(".overview").contains("Educational organization")
      })
      it("shows a share link", () => {
        get("@search-highlights").find(".overview > a > svg")
      })
    })
    describe("Details", () => {
      beforeEach(() => {
        get("@search-highlights").find(".details").as("details")
      })
      it("shows a description", () => {
        get("@details").find(".description")
      })
      it("lists facts", () => {
        get("@details").find(".detail > dt + dd")
      })
    })
    describe("Profiles", () => {
      beforeEach(() => {
        get("@search-highlights").find(".profiles").as("profiles")
      })
      it("shows a title", () => {
        get("@profiles").find("h3").contains("Profiles")
      })
      it("lists the correct number of links", () => {
        get("@profiles").find("h3 + ul > li").as("links").should("have.length", 3)
        get("@links").each(link => {
          wrap(link).find(".external-link > a > figure > img")
          wrap(link).find(".external-link > a > p")
        })
      })
    })
    describe("Related searches", () => {
      beforeEach(() => {
        get("@search-highlights").find(".related-searches").as("related-searches")
      })
      it("shows a title", () => {
        get("@related-searches").find("h3").contains("People also search for")
      })
      it("lists the correct number of links", () => {
        get("@related-searches").find("h3 + ul > li").as("links").should("have.length", 5)
        get("@links").each(link => {
          wrap(link).find(".external-link > a > figure > img")
          wrap(link).find(".external-link > a > p")
        })
      })
    })
  })
})
