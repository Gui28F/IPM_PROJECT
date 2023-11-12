import React, { useEffect } from 'react';
import './MonthlySuggestions.css';
import './MonthlySuggestionsDefault.css';

const MonthlySuggestions = () => {
  useEffect(() => {
    initBookShowcase();
  }, []);

  const initBookShowcase = () => {
    const $books = document.querySelectorAll('#bk-list > li > div.bk-book');
    const booksCount = $books.length;

    $books.forEach((book) => {
      const $book = book;
      const $other = document.querySelectorAll('#bk-list > li > div.bk-book:not(.bk-book)');
      const $parent = $book.parentElement;
      const $page = $book.querySelector('div.bk-page');
      const $bookview = $parent.querySelector('button.bk-bookview');
      const $content = $page.querySelectorAll('div.bk-content');
      let current = 0;

      $parent.querySelector('button.bk-bookback').addEventListener('click', () => {
        $bookview.classList.remove('bk-active');

        if ($book.dataset.flip) {
          $book.dataset.opened = false;
          $book.dataset.flip = false;
          $book.classList.remove('bk-viewback');
          $book.classList.add('bk-bookdefault');
        } else {
          $book.dataset.opened = false;
          $book.dataset.flip = true;
          $book.classList.remove('bk-viewinside', 'bk-bookdefault');
          $book.classList.add('bk-viewback');
        }
      });

      $bookview.addEventListener('click', () => {
        $other.forEach((other) => {
          other.dataset.opened = false;
          other.classList.remove('bk-viewinside');
          other.parentElement.style.zIndex = 0;
          other.parentElement.querySelector('button.bk-bookview').classList.remove('bk-active');

          if (!other.classList.contains('bk-viewback')) {
            other.classList.add('bk-bookdefault');
          }
        });

        if (!$other.classList.contains('bk-viewback')) {
          $other.classList.add('bk-bookdefault');
        }

        if ($book.dataset.opened === 'true') {
          $bookview.classList.remove('bk-active');
          $book.dataset.opened = false;
          $book.dataset.flip = false;
          $book.classList.remove('bk-viewinside');
          $book.classList.add('bk-bookdefault');
        } else {
          $bookview.classList.add('bk-active');
          $book.dataset.opened = true;
          $book.dataset.flip = false;
          $book.classList.remove('bk-viewback', 'bk-bookdefault');
          $book.classList.add('bk-viewinside');
          $parent.style.zIndex = booksCount;
          current = 0;
          $content.forEach((content, index) => {
            content.classList.remove('bk-content-current');
            if (index === current) {
              content.classList.add('bk-content-current');
            }
          });
        }
      });

      if ($content.length > 1) {
        const $navPrev = document.createElement('span');
        $navPrev.className = 'bk-page-prev';
        $navPrev.innerText = '<';

        const $navNext = document.createElement('span');
        $navNext.className = 'bk-page-next';
        $navNext.innerText = '>';

        $page.appendChild(document.createElement('nav').appendChild($navPrev, $navNext));

        $navPrev.addEventListener('click', () => {
          if (current > 0) {
            --current;
            $content.forEach((content, index) => {
              content.classList.remove('bk-content-current');
              if (index === current) {
                content.classList.add('bk-content-current');
              }
            });
          }
        });

        $navNext.addEventListener('click', () => {
          if (current < $content.length - 1) {
            ++current;
            $content.forEach((content, index) => {
              content.classList.remove('bk-content-current');
              if (index === current) {
                content.classList.add('bk-content-current');
              }
            });
          }
        });
      }
    });
  };

  return (
    <div className="container">
  
    <div className="main">
      <ul id="bk-list" className="bk-list clearfix">
        {/* JSX for each book */}
        <li>
          <div className="bk-book book-1 bk-bookdefault">
            {/* Book content */}
            <div class="bk-front">
								<div class="bk-cover-back"></div>
								<div class="bk-cover">
									<h2>
										<span>Anthony Burghiss</span>
										<span>A Catwork Orange</span>
									</h2>
								</div>
							</div>
							<div class="bk-page">
								<div class="bk-content bk-content-current">
									<p>Red snapper Kafue pike fangtooth humums slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
								</div>
								<div class="bk-content">
									<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic saury Blind shark California halibut; false trevally warty angler!</p>
								</div>
								<div class="bk-content">
									<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
								</div>
							</div>
							<div class="bk-back">
								<p>In this nightmare vision of cats in revolt, fifteen-year-old Alex and his friends set out on a diabolical orgy of robbery, rape, torture and murder. Alex is jailed for his teenage delinquency and the State tries to reform him - but at what cost?</p>
							</div>
							<div class="bk-right"></div>
							<div class="bk-left">
								<h2>
									<span>Anthony Burghiss</span>
									<span>A Catwork Orange</span>
								</h2>
							</div>
							<div class="bk-top"></div>
							<div class="bk-bottom"></div>
          </div>
          <div className="bk-info">
            {/* Book information */}
            <button class="bk-bookback">Flip</button>
							<button class="bk-bookview">View inside</button>
							<h3>
								<span>Anthony Burghiss</span>
								<span>A Catwork Orange</span>
							</h3>
							<p>Social prophecy? Black comedy? Study of freewill? A Clockwork Orange is all of these. It is also a dazzling experiment in language, as Burghiss creates a new language - 'meow', the cat slang of a not-too-distant future.</p>
          </div>
        </li>
        {/* Repeat the structure for each book */}
        <li>
						<div class="bk-book book-2 bk-bookdefault">
							<div class="bk-front">
								<div class="bk-cover-back"></div>
								<div class="bk-cover">
									<h2>
										<span>The Catfather</span>
										<span>Mario Purrzo</span>
									</h2>
								</div>
							</div>
							<div class="bk-page">
								<div class="bk-content">
									<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic saury Blind shark California halibut; false trevally warty angler!</p>
								</div>
								<div class="bk-content">
									<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
								</div>
								<div class="bk-content bk-content-current">
									<p>Red snapper Kafue pike fangtooth humums's slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
								</div>
							</div>
							<div class="bk-back">
								<p>Tyrant, blackmailer, racketeer, murderer - his influence reaches every level of American society. Meet Cat Corleone, a friendly cat, a just cat, a reasonable cat. The deadliest lord of the Cata Nostra. The Catfather.</p>
							</div>
							<div class="bk-right"></div>
							<div class="bk-left">
								<h2>
									<span>The Catfather</span>
									<span>by Mario Purrzo</span>
								</h2>
							</div>
							<div class="bk-top"></div>
							<div class="bk-bottom"></div>
						</div>
						<div class="bk-info">
							<button class="bk-bookback">Flip</button>
							<button class="bk-bookview">View inside</button>
							<h3>
								<span>Mario Purrzo</span>
								<span>The Catfather</span>
							</h3>
							<p>A modern masterpiece,The Godfather is a searing portrayal of the 1940s criminal underworld. It is also the intimate story of the Corleone family, at once drawn together and ripped apart by its unique position at the core of the American Mafia. </p>
						</div>
					</li>
					<li>
						<div class="bk-book book-3 bk-bookdefault">
							<div class="bk-front">
								<div class="bk-cover-back"></div>
								<div class="bk-cover">
									<h2>
										<span>J.C. Salinger</span>
										<span>The Catcher in the Rye</span>
									</h2>
								</div>
							</div>
							<div class="bk-page">
								<div class="bk-content bk-content-current">
									<p>Oceanic flyingfish spotted danio fingerfish leaffish, Billfish halibut Atlantic cod threadsail poacher slender mola. Swallower muskellunge, turbot needlefish yellow perch trout dhufish dwarf gourami false moray southern smelt cod dwarf gourami. Betta blue catfish bottlenose electric ray sablefish.</p>
								</div>
								<div class="bk-content">
									<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic saury Blind shark California halibut; false trevally warty angler!</p>
								</div>
								<div class="bk-content">
									<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
								</div>
							</div>
							<div class="bk-back">
								<img src="images/3.png" alt="cat"/>
								<p>Holden Catfield is a seventeen-year-old dropout who has just been kicked out of his fourth school. Navigating his way through the challenges of growing up, Holden dissects the 'phony' aspects of society.</p>
							</div>
							<div class="bk-right"></div>
							<div class="bk-left">
								<h2>
									<span>J.C. Salinger</span>
									<span>The Catcher in the Rye</span>
								</h2>
							</div>
							<div class="bk-top"></div>
							<div class="bk-bottom"></div>
						</div>
						<div class="bk-info">
							<button class="bk-bookback">Flip</button>
							<button class="bk-bookview">View inside</button>
							<h3>
								<span>J.C. Salinger</span>
								<span>The Catcher in the Rye</span>
							</h3>
							<p>Originally published for adults, this novel has since become popular with adolescent readers for its themes of cat confusion, angst, alienation, and rebellion.</p>
						</div>
					</li>
      </ul>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="js/books1.js"></script>
		<script>
		
		</script>
  </div>
  
  );
};

export default MonthlySuggestions;
