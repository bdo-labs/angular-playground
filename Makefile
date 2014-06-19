
#
# Preferences
#

REPORTER?="spec"
ENV?="development"
OUT_DIR?=build


#
# Executables
#

BIN:=node_modules/.bin
BROWSERIFY:="$(BIN)/browserify"
MOCHA:="$(BIN)/mocha"
MYTH:="$(BIN)/myth"
NODE_DEV:="$(BIN)/node-dev"
NPM?=$(shell type -p npm)


#
# Sources
#

CSS:=$(wildcard app/**/*.myth)
JS:=app/index.js $(shell find app -iname '*.js' | grep -v \.test)
STATIC:=$(shell find -E app -regex '^.*(html|svg|webp|png|gif|jpg|ttf|woff)$$')
STATIC:=$(STATIC:app/%=$(OUT_DIR)/%)
MAN:=$(wildcard man/*.md)
MAN_PAGES:=$(MAN:.md=.1)
TESTS:=$(shell find app -iname '*.test.js')


#
# Targets
#

all: docs node_modules $(OUT_DIR) $(OUT_DIR)/app.js $(OUT_DIR)/app.css
	@echo ""
	@echo "    Built!"
	@echo ""

$(OUT_DIR): $(STATIC)
	mkdir -p $(OUT_DIR)

$(OUT_DIR)/%: app/%
	mkdir -p $(@D)
	ln -fs $^ $@

$(OUT_DIR)/app.js: $(JS)
	$(BROWSERIFY) --entry $< > $@

$(OUT_DIR)/app.css: $(CSS)
	cat $^ | $(MYTH) > $@

docs: $(MAN_PAGES)

man/%.1: man/%.md
	curl -F page=@$^ http://mantastic.herokuapp.com > $@

node_modules: package.json
	$(NPM) install

test: $(OUT_DIR)
	$(MOCHA) --reporter $(REPORTER) --require should $(TESTS)

clean: cleandocs
	rm -fr build

cleandocs:
	rm -f man/*.1

serve: $(OUT_DIR)
	$(NODE_DEV) .

.PHONY: all test clean cleandocs serve

