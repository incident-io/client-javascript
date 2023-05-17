.PHONY: src openapi-generator-cli-6.jar

src:
	rm -rfv src
	java -jar openapi-generator-cli-6.jar \
		generate \
			--generator-name typescript-fetch \
			--input-spec definitions/openapi3.json \
			--skip-validate-spec \
			--additional-properties npmName=incident-io,typescriptThreePlus=true,modelPropertyNaming=original \
			--output .

openapi-generator-cli-6.jar:
	curl https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.3.0/openapi-generator-cli-6.3.0.jar \
		--output $@
