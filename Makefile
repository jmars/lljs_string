build: components
	@component build --dev

components: component.json
	@component install --dev

module: src/index.ljs
	./node_modules/lljs/bin/ljc -o index.js src/index.ljs

clean:
	rm -fr build components template.js

.PHONY: clean
