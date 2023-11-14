
import React, { useEffect } from 'react';
import "./MonthlySuggestions.css"
import $ from 'jquery';
import {Books} from "./month.js"

const MonthlySuggestions = () => {
  
    const $books = $('#bk-list > li > div.bk-book');
    const booksCount = $books.length;
  
    const init = () => {
      $books.each(function () {
        const $book = $(this);
        const $other = $books.not($book);
        const $parent = $book.parent();
        const $page = $book.children('div.bk-page');
        const $bookview = $parent.find('button.bk-bookview');
        const $content = $page.children('div.bk-content');
        let current = 0;
  
        $parent.find('button.bk-bookback').on('click', function () {
          $bookview.removeClass('bk-active');
  
          if ($book.data('flip')) {
            $book.data({
              opened: false,
              flip: false,
            }).removeClass('bk-viewback').addClass('bk-bookdefault');
          } else {
            $book.data({
              opened: false,
              flip: true,
            }).removeClass('bk-viewinside bk-bookdefault').addClass('bk-viewback');
          }
        });
  
        $bookview.on('click', function () {
          const $this = $(this);
  
          $other.data('opened', false).removeClass('bk-viewinside').parent().css('z-index', 0).find('button.bk-bookview').removeClass('bk-active');
          if (!$other.hasClass('bk-viewback')) {
            $other.addClass('bk-bookdefault');
          }
  
          if ($book.data('opened')) {
            $this.removeClass('bk-active');
            $book.data({
              opened: false,
              flip: false,
            }).removeClass('bk-viewinside').addClass('bk-bookdefault');
          } else {
            $this.addClass('bk-active');
            $book.data({
              opened: true,
              flip: false,
            }).removeClass('bk-viewback bk-bookdefault').addClass('bk-viewinside');
            $parent.css('z-index', booksCount);
            current = 0;
            $content.removeClass('bk-content-current').eq(current).addClass('bk-content-current');
          }
        });
  
        if ($content.length > 1) {
          const $navPrev = $('<span className="bk-page-prev">&lt;</span>');
          const $navNext = $('<span className="bk-page-next">&gt;</span>');
  
          $page.append($('<nav></nav>').append($navPrev, $navNext));
  
          $navPrev.on('click', function () {
            if (current > 0) {
              --current;
              $content.removeClass('bk-content-current').eq(current).addClass('bk-content-current');
            }
            return false;
          });
  
          $navNext.on('click', function () {
            if (current < $content.length - 1) {
              ++current;
              $content.removeClass('bk-content-current').eq(current).addClass('bk-content-current');
            }
            return false;
          });
        }
      });
    };
  
    useEffect(() => {
      init();
      return () => {
        // Code to execute on component unmounting, if needed
      };
    }, []);
  
    return (
        
        <div className="container">
	<div className="main">
		<ul id="bk-list" className="bk-list clearfix">
			<li>
				<div className="bk-book book-1 bk-bookdefault">
					<div className="bk-front">
						<div className="bk-cover-back"></div>
						<div className="bk-cover">
							<h2>
										<span>Anthony Burghiss</span>
										<span>A Catwork Orange</span>
									</h2>
						</div>
					</div>
					<div className="bk-page">
						<div className="bk-content bk-content-current">
							<p>Red snapper Kafue pike fangtooth humums slipmouth, salmon cutlassfish; swallower European perch mola mola sunfish, threadfin bream. Billfish hog sucker trout-perch lenok orbicular velvetfish. Delta smelt striped bass, medusafish dragon goby starry
								flounder cuchia round whitefish northern anchovy spadefish merluccid hake cat shark Black pickerel. Pacific cod.</p>
						</div>
						<div className="bk-content">
							<p>Whale catfish leatherjacket deep sea anglerfish grenadier sawfish pompano dolphinfish carp large-eye bream, squeaker amago. Sandroller; rough scad, tiger shovelnose catfish snubnose parasitic eel? Black bass soldierfish duckbill--Rattail Atlantic
								saury Blind shark California halibut; false trevally warty angler!</p>
						</div>
						<div className="bk-content">
							<p>Trahira giant wels cutlassfish snapper koi blackchin mummichog mustard eel rock bass whiff murray cod. Bigmouth buffalo ling cod giant wels, sauger pink salmon. Clingfish luderick treefish flatfish Cherubfish oldwife Indian mul gizzard shad hagfish
								zebra danio. Butterfly ray lizardfish ponyfish muskellunge Long-finned sand diver mullet swordfish limia ghost carp filefish.</p>
						</div>
						<nav><span className="bk-page-prev">&lt;</span><span className="bk-page-next">&gt;</span></nav>
					</div>
					<div className="bk-back">
						<p>In this nightmare vision of cats in revolt, fifteen-year-old Alex and his friends set out on a diabolical orgy of robbery, rape, torture and murder. Alex is jailed for his teenage delinquency and the State tries to reform him - but at what cost?</p>
					</div>
					<div className="bk-right"></div>
					<div className="bk-left">
						<h2>
									<span>Anthony Burghiss</span>
									<span>A Catwork Orange</span>
								</h2>
					</div>
					<div className="bk-top"></div>
					<div className="bk-bottom"></div>
				</div>
				<div className="bk-info">
					<button className="bk-bookback">Flip</button>
					<button className="bk-bookview">View inside</button>
					<h3>
								<span>Anthony Burghiss</span>
								<span>A Catwork Orange</span>
							</h3>
					<p>Social prophecy? Black comedy? Study of freewill? A Clockwork Orange is all of these. It is also a dazzling experiment in language, as Burghiss creates a new language - 'meow', the cat slang of a not-too-distant future.</p>
				</div>
			</li>
		</ul>
	</div>
</div>
    );
};

export default MonthlySuggestions;